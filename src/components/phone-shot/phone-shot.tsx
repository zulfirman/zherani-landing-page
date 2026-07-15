import { component$, useSignal, type QwikIntrinsicElements } from "@builder.io/qwik";

/**
 * Drop 1080×2180 screenshots at these paths under public/imgs/screenshots/:
 *   hero.webp
 *   feature-collaborate.webp
 *   feature-workspaces.webp
 *   feature-budgets.webp
 *   feature-reports.webp
 *   gallery-01.webp … gallery-04.webp
 *   download-cta.webp
 */
export type PhoneShotProps = {
  src: string;
  alt: string;
  class?: string;
  priority?: boolean;
} & Pick<QwikIntrinsicElements["img"], "width" | "height">;

export const PhoneShot = component$<PhoneShotProps>((props) => {
  const failed = useSignal(false);

  return (
    <div
      class={[
        "relative w-[220px] sm:w-[240px] lg:w-[260px] shrink-0 overflow-hidden rounded-box bg-base-300 shadow-lg ring-1 ring-base-content/10",
        "aspect-[1080/2180]",
        props.class,
      ]}
    >
      {!failed.value && (
        <img
          src={props.src}
          alt={props.alt}
          width={props.width ?? 1080}
          height={props.height ?? 2180}
          class="absolute inset-0 h-full w-full object-cover"
          loading={props.priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={props.priority ? "high" : "low"}
          onError$={() => {
            failed.value = true;
          }}
        />
      )}
      {failed.value && (
        <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
          <span class="skeleton absolute inset-0 h-full w-full rounded-none"></span>
          <span class="relative z-10 text-xs font-medium text-base-content/60">
            {props.alt}
          </span>
        </div>
      )}
    </div>
  );
});
