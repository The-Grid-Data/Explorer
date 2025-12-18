type MediaTypeObject = { mediaType?: { slug?: string | null } | null };

// TODO: should extract this from TGS
const MEDIA_SLUGS = {
  LogoLightBg: 'logo_light_bg',
  IconDarkBG: 'icon',
  IconLightBG: 'icon',
  LogoDarkBG: 'logo_dark_bg',
  ProfileHeader: 'profile_header'
};

function findMediaByType(type: keyof typeof MEDIA_SLUGS) {
  return (media: MediaTypeObject | null) =>
    !media ? undefined : media.mediaType?.slug === MEDIA_SLUGS[type];
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
