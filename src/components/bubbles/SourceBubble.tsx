type Props = {
  pageContent: string;
  metadata: {
    title: string;
    image: string;
    description: string;
    url: string;
  };
  onSourceClick?: () => void;
};

export const SourceBubble = (props: Props) => (
  <>
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-start mb-2 items-center animate-fade-in host-container hover:brightness-90 active:brightness-75"
      onClick={() => props.onSourceClick?.()}
      style={{
        cursor: 'pointer',
      }}
    >
      {props.metadata.image && (
        <img src={props.metadata.image} alt="Preview" class="w-16 h-16 object-cover mr-2 rounded-lg" />
      )}
      <div class="flex flex-col">
        <span class="text-lg font-semibold">{props.metadata.title}</span>
        <span class="text-sm">{props.metadata.description}</span>
      </div>
    </div>
  </>
);

