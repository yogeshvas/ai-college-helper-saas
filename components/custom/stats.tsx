import HyperText from "../ui/hyper-text";

export function DownloadStats() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <HyperText text="400+" />
        <div>Downloads</div>
        <div className="rounded-full bg-slate-900">|</div>
        <div className="">
          Powered by <span className="text-blue-500 ">Gemini AI</span>
        </div>
      </div>
    </>
  );
}
