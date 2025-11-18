type MediaTypeObject = { mediaType?: { name?: string | null } | null };

// TODO: should extract this from TGS
const MEDIA_NAMES = {
  LogoLightBg: 'Logo Light BG',
  IconDarkBG: 'Icon Dark BG',
  IconLightBG: 'Icon Light BG',
  LogoDarkBG: 'Logo Dark BG',
  LogoLightBG: 'Logo Light BG',
  ProfileHeader: 'Profile Header'
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
  logo: findMediaByType('LogoLightBg'),
  /**
   * Return Icon Light BG from the media array
   * @example const validIconUrl = profile.media?.find(findMedia.icon)?.url;
   * */
  icon: findMediaByType('IconLightBG')
};
