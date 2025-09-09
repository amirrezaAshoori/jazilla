export const getIcon = ({ iconList, iconName, ...rest }) => {
  const TagName = iconList[iconName];
  return TagName ? <TagName {...rest} /> : null;
};