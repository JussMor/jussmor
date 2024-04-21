import { component$, PropsOf } from "@builder.io/qwik";

interface IFrameInterface  {
    url: string
}

type IframeProps = PropsOf<'iframe'> & IFrameInterface

const EmbedVideo = component$<IframeProps>((props) => {

    return (
        <iframe class='w-full aspect-video'
        src={props.url}>
        </iframe>
    )
})

export {EmbedVideo}