type MediaTypeObject = { mediaType?: { name?: string | null } | null };
const MEDIA_NAMES = {
  LogoLightBg: 'Logo Light BG'
};

function findMediaByType(type: keyof typeof MEDIA_NAMES) {
  return (media: MediaTypeObject | null) =>
    !media ? undefined : media.mediaType?.name === MEDIA_NAMES[type];
}

export const findMedia = {
  logo: findMediaByType('LogoLightBg')
};
