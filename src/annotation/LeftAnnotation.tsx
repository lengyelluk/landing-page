type ILeftAnnotationProps = {
  text: string;
  link: string;
  order: string;
};

const LeftAnnotation = (props: ILeftAnnotationProps) => (
  <div className="text-left">
      <div className="text-sm underline">{props.order} - <a href={props.link} target='_blank'>{props.text}</a></div>
    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { LeftAnnotation };
