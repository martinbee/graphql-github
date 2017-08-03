const getTrimmedFollowingUrl = (url) => {
  const bracketIndex = url.indexOf('{');

  return url.slice(0, bracketIndex);
};

export default getTrimmedFollowingUrl;
