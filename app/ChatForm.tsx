import Plane from "@/components/icons/Plane";
import { ChangeEvent, FormEvent, useState } from "react";
import { callChatbot } from "@/actions/callChatbot";
import { MessageType } from "@/types/Message";


export default function ChatForm({ addMessage, messageHistory, isLoading, turnLoadingOff, turnLoadingOn  }: { addMessage: (message: MessageType) => void, messageHistory: MessageType[], isLoading: boolean, turnLoadingOff: () => void, turnLoadingOn: () => void }) {
    const [currentMessage, setCurrentMessage] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentMessage(e.target.value); 
    }

    const addMessageToHistory = (prevHistory: MessageType[], message: MessageType) => {
        return prevHistory.concat(message);
    }

    const handleSend = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newMessage: MessageType = { 
            sender: "user",
            content: currentMessage
        }

        addMessage(newMessage)

        const adjustedHistory = addMessageToHistory(messageHistory, newMessage)
        setCurrentMessage('');

        const formData = new FormData();
        formData.append('history', JSON.stringify(adjustedHistory));


        try{
            turnLoadingOn()
            const formData = new FormData()
            formData.append('history', JSON.stringify(adjustedHistory));

            const botRes: MessageType = { 
                sender: 'bot', 
                content: await callChatbot(formData) || "Error: Did not receive message"
            }

            addMessage(botRes);

        }catch(e: any){
            console.log(e);
        } finally {
            turnLoadingOff();
        }
    }

    return (
        <div className={`sticky bottom-0 w-full px-[10px] rounded-t-full flex flex-col justify-center items-center gap-2 z-20`}>
            <form onSubmit={handleSend} className={`w-full md:w-[600px] bg-white border-2 rounded-xl h-[50px] shadow flex items-center pl-[15px] pr-[5px] ${isFocused ? "border-gray-600" : "border-gray-200"} smoothe flex gap-1 items-center`}>
                <input value={currentMessage} onChange={handleChange} className="h-full w-full placeholder:text-gray-500 smoothe outline-none text-gray-800" placeholder="What do you want to know?" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
                <button type="submit" className="w-[30px]">
                    <Plane isFocused={isFocused} />
                </button>
            </form>
        </div>
    ) 
}