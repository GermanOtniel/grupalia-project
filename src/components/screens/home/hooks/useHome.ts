import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { IImagesResponse } from "../types";
import { API_URL } from "../../../../constants";

export const useHome = () => {
  const observer = useRef<IntersectionObserver>();
  const [fullscreen, setFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [items, setItems] = useState<IImagesResponse["items"]>([]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFullscreen(false);
        setCurrentImage("");
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setFullscreen, setCurrentImage]);

  const getData = useCallback(async (cursor = "") => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });
    const result = await fetch(`${API_URL}?limit=100${cursor ? `&cursor=${cursor}` : "&page=1"}`);
    const response: IImagesResponse = await result.json();
    return response;
  }, []);

  const { data, error, fetchNextPage, hasNextPage, isFetching, isLoading } = useInfiniteQuery({
    queryKey: ["items"],
    queryFn: ({ pageParam }) => getData(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.metadata?.nextCursor;
    },
  });

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetching, isLoading]
  );

  useMemo(() => {
    if (!data?.pages?.length) setItems([]);
    const foundItems = data?.pages.reduce((acc, page) => {
      if (!page?.items?.length) return acc;
      return [...acc, ...page.items];
    }, [] as IImagesResponse["items"]);
    setItems(foundItems || []);
  }, [data, setItems]);

  const handleImageClick = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    openFullscreen();
  };

  const openFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    setFullscreen(true);
  };

  const closeFullscreen = () => {
    setFullscreen(false);
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(e => {
        setCurrentImage("");
      });
    }
  };

  const downloadImage = (url: string, filename: string) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${filename}.jpg`);
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      })
      .catch(error => console.error('Error downloading image:', error));
  };

  const deleteImageOfGrid = (itemIdToDelete: number) => {
    const copyItems = [...items];
    const itemIndex = items.findIndex(item => item.id === itemIdToDelete);
    if (itemIndex >= 0) {
      copyItems.splice(itemIndex, 1);
    }
    setItems(copyItems);
  };

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    lastElementRef,
    items,
    closeFullscreen,
    handleImageClick,
    currentImage,
    fullscreen,
    downloadImage,
    deleteImageOfGrid,
  };
};