import { BoltIcon, DownloadIcon, EllipsisIcon, EyeIcon, PencilIcon, TrashIcon } from "../../icons";
import CloseIcon from "../../icons/CloseIcon.Icon";
import { LoaderWithDescription, SimpleLoader } from "../../shared";
import ErrorView from "../../shared/ErrorView";
import { useHome } from "./hooks/useHome";
import { BoltButton, CloseButton, ContainerFullScreen, Grid, HomeContainer, Image, ImageFullScreen, PencilButton, ReactionButton, ReactionsContainer } from "./styled";

const HomeComponent = () => {
  const {
    error,
    isLoading,
    isFetching,
    lastElementRef,
    items,
    fullscreen,
    currentImage,
    closeFullscreen,
    handleImageClick,
    downloadImage,
    deleteImageOfGrid,
  } = useHome();

  return (
    <>
      {error && (
        <ErrorView />
      )}
      {isLoading && (
        <SimpleLoader />
      )}
      {!!items.length && (
        <HomeContainer>
          <div style={{ width: "95%", }} >
            <Grid>
              {items.map((item, index) => (
                <div 
                  key={item.id} 
                  ref={(index + 1) === items.length ? lastElementRef : undefined}
                  style={{ position: "relative", }}
                >
                  <Image
                    src={item.url}
                    alt={`Imagen #${index}`}
                  />
                  <div className="dropdown">
                    <button>
                      <EllipsisIcon />
                    </button>
                    <div className="dropdown-content">
                      <button onClick={() => handleImageClick(item.url)}>
                        <EyeIcon />
                        <span>Ver</span>
                      </button>
                      <button onClick={() => downloadImage(item.url, item.username)}>
                        <DownloadIcon />
                        <span>Descargar</span>
                      </button>
                      <button onClick={() => deleteImageOfGrid(item.id)}>
                        <TrashIcon />
                        <span>Borrar</span>
                      </button>
                    </div>
                  </div>

                  <PencilButton>
                    <PencilIcon />
                  </PencilButton>

                  <ReactionsContainer>
                    <ReactionButton>
                      👍🏻 {item.stats.likeCount}
                    </ReactionButton>
                    <ReactionButton>
                      ❤️ {item.stats.heartCount}
                    </ReactionButton>
                    <ReactionButton>
                      😂 {item.stats.likeCount}
                    </ReactionButton>
                    <ReactionButton>
                      😢 {item.stats.likeCount}
                    </ReactionButton>
                    <BoltButton>
                      <BoltIcon />
                      <span>{item.stats.commentCount}</span>
                    </BoltButton>
                  </ReactionsContainer>
                </div>
              ))}
            </Grid>
            {isFetching && (<LoaderWithDescription />)}
          </div>
        </HomeContainer>
      )}
      {fullscreen && (
        <ContainerFullScreen>
          <CloseButton onClick={closeFullscreen}>
            <CloseIcon />
          </CloseButton>
          <ImageFullScreen
            src={currentImage}
            alt="Full Screen"
            onClick={closeFullscreen}
          />
        </ContainerFullScreen>
      )}
    </>
  );
};

export default HomeComponent;