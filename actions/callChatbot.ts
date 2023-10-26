'use server'

import { MessageType } from "@/types/Message";
import OpenAI from "openai";


enum ChatCompletionRequestMessageRoleEnum {
    User = 'user',
    Assistant = 'assistant',
    System = 'system',
  }

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function callChatbot(formData: FormData) {
    const historyData = formData.get('history') as string;
    const history: MessageType[] = JSON.parse(historyData);

    const structuredHistory = history.map(message => {
        const { content, sender } = message;

        return {
          "role": sender == "bot" ? ChatCompletionRequestMessageRoleEnum.Assistant : ChatCompletionRequestMessageRoleEnum.User, 
          "content": content
        }
    })

    const system = `You are a helpful chatbot.`

    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": system}, 
            ...structuredHistory
        ],
    });

    return chatCompletion.choices[0].message.content
}