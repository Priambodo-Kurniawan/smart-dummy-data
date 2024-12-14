import Typewriter from "typewriter-effect";
import useAudio from "../hooks/useAudio";

export default function TextBuble({
    chat,
    activeIndex,
    index,
    nextDialog,
    changeStatus,
}) {
    const { play, pause } = useAudio(
        "https://www.myinstants.com/media/sounds/whatsapp-typing.mp3"
    );
    const { play: playRead, pause: pauseRead } = useAudio(
        "https://www.myinstants.com/media/sounds/whatsapp-message.mp3"
    );

    return (
        <div
            className={`flex ${
                activeIndex >= index ? "opacity-100" : "opacity-0"
            } transition-opacity ease-in-out delay-150 duration-300 ${
                chat.position === "left" ? "justify-start" : "justify-end"
            }`}
            id={`chat-${index}`}
        >
            <div
                className={`flex items-start gap-2 ${
                    chat.position === "left" ? "" : "flex-row-reverse"
                }`}
            >
                <img
                    className="w-14 h-14 rounded-full"
                    src={`https://avatar.iran.liara.run/public/${chat.gender}?username=${chat.name}`}
                    alt={chat.name}
                />
                <div
                    className={`flex flex-col w-full max-w-[320px] leading-1.5 gap-2`}
                >
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {chat.name}
                        </span>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            {chat.timestamp}
                        </span>
                    </div>
                    <div
                        className={`relative p-4 text-sm font-normal py-2.5 text-gray-900 dark:text-white border-gray-200 bg-gray-100 dark:bg-gray-700 ${
                            chat.position === "left"
                                ? "rounded-es-xl rounded-e-xl"
                                : "rounded-s-xl rounded-b-xl"
                        }`}
                    >
                        {/* {chat.content} */}
                        <span className={``}>
                            {activeIndex === index && (
                                <span className="absolute top-2.5 left-4 right-4 h-full inline-block">
                                    <Typewriter
                                        options={{
                                            loop: false,
                                            delay: 20,
                                            wrapperClassName: "",
                                        }}
                                        onInit={(typewriter) => {
                                            typewriter
                                                .callFunction(() => {
                                                    play();
                                                })
                                                .pauseFor(400)
                                                .typeString(chat.content)
                                                .callFunction(() => {
                                                    pause();
                                                })
                                                .pauseFor(1000)
                                                .callFunction(() => {
                                                    playRead();
                                                    changeStatus(index, "read");
                                                })
                                                .pauseFor(1500)
                                                .callFunction(() => {
                                                    pauseRead();
                                                })
                                                .pauseFor(1500)
                                                .callFunction(() => {
                                                    nextDialog();
                                                })
                                                .start();
                                        }}
                                    />
                                </span>
                            )}
                            <span
                                className={
                                    activeIndex === index
                                        ? "opacity-10"
                                        : "opacity-100"
                                }
                            >
                                {chat.content}&nbsp;&nbsp;
                            </span>
                        </span>
                    </div>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {chat.status ? chat.status : "delivered"}
                    </span>
                </div>
            </div>
        </div>
    );
}
