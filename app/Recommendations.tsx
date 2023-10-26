import Recommendation from "./Recommendation";

export default function Recommendations() {
    return (
        <div className="w-full grid grid-cols-2 w-full md:w-[600px] gap-2">
            <Recommendation color="white" title="What is Chat-fu?" />
            <Recommendation color="red" title="What are the benefits?" />
            <Recommendation color="yellow" title="How do I get started?" />
            <Recommendation color="green" title="Keep me updated!" />
        </div>
    )
}