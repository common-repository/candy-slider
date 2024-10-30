/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./style.scss";
import "./editor.scss";

const __ = wp.i18n.__; // The __() for internationalization.
const registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() to register blocks.
const { MediaUpload } = wp.editor;

/**
 * Register: a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("csgb/slider-block", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("Candy Slider"), // Block title.
  icon: "slides", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__("Candy Slider"), __("slider"), __("carousel")],

  attributes: {
    id: {
      source: "attribute",
      selector: ".candy-slider",
      attribute: "id"
    },
    slides: {
      source: "query",
      default: [],
      selector: ".candy-slider__item",
      query: {
        image: {
          source: "attribute",
          selector: ".slide-image-src",
          attribute: "src"
        },
        index: {
          source: "text",
          selector: "span.slide-index"
        }
      }
    }
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */

  // The "edit" property must be a valid function.
  edit: props => {
    const { slides } = props.attributes;

    if (!props.attributes.id) {
      const id = `slider${Math.floor(Math.random() * 100)}`;
      props.setAttributes({
        id
      });
    }
    const slidesList = slides
      .sort((a, b) => a.index - b.index)
      .map(slide => {
        return (
            <div className="csgb-testimonial-block">
            <div>
              <span>
                Slide {Number(slide.index) + 1}:
              </span>
              <span
                className="remove-testimonial"
                onClick={() => {
                  const newSlides = slides
                    .filter(item => item.index != slide.index)
                    .map(s => {
                      if (s.index > slide.index) {
                        s.index -= 1;
                      }

                      return s;
                    });

                  props.setAttributes({
                    slides: newSlides
                  });
                }}
              >
                <i className="fa fa-times" />
              </span>
            </div>
            <div className="csgb-slider">
              <div className="csgb__picture">
                <MediaUpload
                  onSelect={media => {
                    const image = media.url;
                    const newObject = Object.assign({}, slide, {
                      image: image
                    });
                    props.setAttributes({
                      slides: [
                        ...slides.filter(
                          item => item.index != slide.index
                        ),
                        newObject
                      ]
                    });
                  }}
                  type="image"
                  value={slide.image}
                  render={({ open }) =>
                    !!slide.image ? (
                      <div className="csgb__image-wrap csgb__image-wrap--has-image">
                        {props.isSelected && (
                          <div className="csgb__picture__actions">
                            <a
                              href="#"
                              onClick={() => {
                                const newObject = Object.assign(
                                  {},
                                  slide,
                                  {
                                    image: null
                                  }
                                );
                                props.setAttributes({
                                  slides: [
                                    ...slides.filter(
                                      item => item.index != slide.index
                                    ),
                                    newObject
                                  ]
                                });
                              }}
                            >
                              × Remove
                            </a>
                          </div>
                        )}
                        <img
                          className="csgb__image"
                          src={slide.image}
                          onClick={open}
                        />
                      </div>
                    ) : (
                      <div className="csgb__image-wrap">
                      <a
                        href="#"
                        className="csgb__select-image"
                        onClick={open}
                      >
                        Select image
                      </a>
                      </div>
                    )
                  }
                />
              </div>
            </div>
          </div>
        );
      });
    return (
      <div className={props.className}>
        {slidesList}
        <button
          className="add-more-slide"
          onClick={content =>
            props.setAttributes({
              slides: [
                ...props.attributes.slides,
                {
                  index: props.attributes.slides.length
                }
              ]
            })
          }
        >
          <svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-insert" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"></path></svg>
          Add a slide
        </button>
      </div>
    );
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  save: props => {
    const { id, slides } = props.attributes;
    const slidesList = slides.map(function(slide) {
      return (
        <div
          key={slide.index}
          className="candy-slider__item swiper-slide"
          style={{
            backgroundImage: `url(${slide.image})`
          }}
        >
        <img src={slide.image} className="slide-image-src" alt='Hidden image for src.' style={{ display: "none" }} />
        <span className="slide-index" style={{ display: "none" }}>
              {slide.index}
        </span>
        </div>
      );
    });
    if (slides.length > 0) {
      return (
          <div id={id} className="candy-slider swiper-container">
              <div className="swiper-wrapper">
                  {slidesList}
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
          </div>
      );
    } else return null;
  }
});
