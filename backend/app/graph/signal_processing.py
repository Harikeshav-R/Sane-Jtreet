from langchain_openai import ChatOpenAI


class SignalProcessor:
    def __init__(self, quick_thinking_llm: ChatOpenAI):
        self.quick_thinking_llm = quick_thinking_llm

    def process_signal(self, full_signal: str) -> str:
        messages = [
            (
                "system",
                "You are an efficient assistant designed to analyze paragraphs or financial reports provided by a group of analysts. Your task is to extract the investment decision: SELL, BUY, or HOLD. Provide only the extracted decision (SELL, BUY, or HOLD) as your output, without adding any additional text or information.",
            ),
            ("human", full_signal),
        ]

        return self.quick_thinking_llm.invoke(messages).content
