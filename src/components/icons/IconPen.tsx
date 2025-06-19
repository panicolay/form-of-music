import Icon from './Icon';

export default function IconPen(props: React.ComponentProps<typeof Icon>) {
  return (
    <Icon {...props}>
      <path d="M18 4L4 18H0V14L14 0L18 4ZM1 14.4141V17H3.58594L16.5859 4L14 1.41406L1 14.4141Z" />
    </Icon>
  );
}
