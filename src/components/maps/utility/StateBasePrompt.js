export default function StateBasePrompt({ workingTripId }) {
    return (
        workingTripId !== 0 && 
            <h1 className="state-prompt">Now pick a BaseCamp for your recreations!</h1>
    )
}