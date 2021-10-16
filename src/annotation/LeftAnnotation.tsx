type ILeftAnnotationProps = {
  text: string;
  link: string;
  order: string;
};

const LeftAnnotation = (props: ILeftAnnotationProps) => (
  <div className="text-left">
    <div className="mt-8 text-sm">
      <div>Zdroje</div>
      <div>{props.order} <a href={props.link} target='_blank'>{props.text}</a></div>
    </div>

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
