from typing import Annotated

from langgraph.graph import MessagesState
from typing_extensions import TypedDict


class InvestDebateState(TypedDict):
    bull_history: Annotated[
        str, "Bullish Conversation history"
    ]
    bear_history: Annotated[
        str, "Bearish Conversation history"
    ]
    history: Annotated[str, "Conversation history"]
    current_response: Annotated[str, "Latest response"]
    judge_decision: Annotated[str, "Final judge decision"]
    count: Annotated[int, "Length of the current conversation"]


class RiskDebateState(TypedDict):
    risky_history: Annotated[
        str, "Risky Agent's Conversation history"
    ]
    safe_history: Annotated[
        str, "Safe Agent's Conversation history"
    ]
    neutral_history: Annotated[
        str, "Neutral Agent's Conversation history"
    ]
    history: Annotated[str, "Conversation history"]
    latest_speaker: Annotated[str, "Analyst that spoke last"]
    current_risky_response: Annotated[
        str, "Latest response by the risky analyst"
    ]
    current_safe_response: Annotated[
        str, "Latest response by the safe analyst"
    ]
    current_neutral_response: Annotated[
        str, "Latest response by the neutral analyst"
    ]
    judge_decision: Annotated[str, "Judge's decision"]
    count: Annotated[int, "Length of the current conversation"]
