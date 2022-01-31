const truncateStr = (string, limit) => {
  const truncated = string.slice(0, limit);

  if (truncated.length === string.length) {
    return string;
  }

  return `${truncated}...`;
};

export default truncateStr;