type MediaTypeObject = { mediaType?: { name?: string | null } | null };

// TODO: should extract this from TGS
const MEDIA_NAMES = {
  LogoLightBg: 'Logo Light BG'
};

function findMediaByType(type: keyof typeof MEDIA_NAMES) {
  return (media: MediaTypeObject | null) =>
    !media ? undefined : media.mediaType?.name === MEDIA_NAMES[type];
}

export const findMedia = {
  /**
   * Return Logo Light BG from the media array
   * @example const validLogoUrl = profile.media?.find(findMedia.logo)?.url;
   * */
  logo: findMediaByType('LogoLightBg')
};
