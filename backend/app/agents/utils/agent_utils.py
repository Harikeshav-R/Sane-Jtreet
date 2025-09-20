from datetime import datetime
from typing import Annotated

from langchain_core.messages import HumanMessage
from langchain_core.messages import RemoveMessage
from langchain_core.tools import tool

import app.dataflows.interface as interface
from app.core.default_config import DEFAULT_CONFIG


def create_msg_delete():
    def delete_messages(state):
        messages = state["messages"]

        removal_operations = [RemoveMessage(id=m.id) for m in messages]

        placeholder = HumanMessage(content="Continue")

        return {"messages": removal_operations + [placeholder]}

    return delete_messages


class Toolkit:
    _config = DEFAULT_CONFIG.copy()

    @classmethod
    def update_config(cls, config):
        """Update the class-level configuration."""
        cls._config.update(config)

    @property
    def config(self):
        """Access the configuration."""
        return self._config

    def __init__(self, config=None):
        if config:
            self.update_config(config)

    @staticmethod
    @tool
    def get_reddit_news(
            curr_date: Annotated[str, "Date you want to get news for in yyyy-mm-dd format"],
    ) -> str:
        global_news_result = interface.get_reddit_global_news(curr_date, 7, 5)

        return global_news_result

    @staticmethod
    @tool
    def get_finnhub_news(
            ticker: Annotated[
                str,
                "Search query of a company, e.g. 'AAPL, TSM, etc.",
            ],
            start_date: Annotated[str, "Start date in yyyy-mm-dd format"],
            end_date: Annotated[str, "End date in yyyy-mm-dd format"],
    ):
        end_date_str = end_date

        end_date = datetime.strptime(end_date, "%Y-%m-%d")
        start_date = datetime.strptime(start_date, "%Y-%m-%d")
        look_back_days = (end_date - start_date).days

        finnhub_news_result = interface.get_finnhub_news(
            ticker, end_date_str, look_back_days
        )

        return finnhub_news_result

    @staticmethod
    @tool
    def get_reddit_stock_info(
            ticker: Annotated[
                str,
                "Ticker of a company. e.g. AAPL, TSM",
            ],
            curr_date: Annotated[str, "Current date you want to get news for"],
    ) -> str:
        stock_news_results = interface.get_reddit_company_news(ticker, curr_date, 7, 5)

        return stock_news_results

    @staticmethod
    @tool
    def get_YFin_data(
            symbol: Annotated[str, "ticker symbol of the company"],
            start_date: Annotated[str, "Start date in yyyy-mm-dd format"],
            end_date: Annotated[str, "End date in yyyy-mm-dd format"],
    ) -> str:
        result_data = interface.get_YFin_data(symbol, start_date, end_date)

        return result_data

    @staticmethod
    @tool
    def get_YFin_data_online(
            symbol: Annotated[str, "ticker symbol of the company"],
            start_date: Annotated[str, "Start date in yyyy-mm-dd format"],
            end_date: Annotated[str, "End date in yyyy-mm-dd format"],
    ) -> str:
        result_data = interface.get_YFin_data_online(symbol, start_date, end_date)

        return result_data

    @staticmethod
    @tool
    def get_stockstats_indicators_report(
            symbol: Annotated[str, "ticker symbol of the company"],
            indicator: Annotated[
                str, "technical indicator to get the analysis and report of"
            ],
            curr_date: Annotated[
                str, "The current trading date you are trading on, YYYY-mm-dd"
            ],
            look_back_days: Annotated[int, "how many days to look back"] = 30,
    ) -> str:
        result_stockstats = interface.get_stock_stats_indicators_window(
            symbol, indicator, curr_date, look_back_days, False
        )

        return result_stockstats

    @staticmethod
    @tool
    def get_stockstats_indicators_report_online(
            symbol: Annotated[str, "ticker symbol of the company"],
            indicator: Annotated[
                str, "technical indicator to get the analysis and report of"
            ],
            curr_date: Annotated[
                str, "The current trading date you are trading on, YYYY-mm-dd"
            ],
            look_back_days: Annotated[int, "how many days to look back"] = 30,
    ) -> str:
        result_stockstats = interface.get_stock_stats_indicators_window(
            symbol, indicator, curr_date, look_back_days, True
        )

        return result_stockstats

    @staticmethod
    @tool
    def get_finnhub_company_insider_sentiment(
            ticker: Annotated[str, "ticker symbol for the company"],
            curr_date: Annotated[
                str,
                "current date of you are trading at, yyyy-mm-dd",
            ],
    ):
        data_sentiment = interface.get_finnhub_company_insider_sentiment(
            ticker, curr_date, 30
        )

        return data_sentiment

    @staticmethod
    @tool
    def get_finnhub_company_insider_transactions(
            ticker: Annotated[str, "ticker symbol"],
            curr_date: Annotated[
                str,
                "current date you are trading at, yyyy-mm-dd",
            ],
    ):
        data_trans = interface.get_finnhub_company_insider_transactions(
            ticker, curr_date, 30
        )

        return data_trans

    @staticmethod
    @tool
    def get_simfin_balance_sheet(
            ticker: Annotated[str, "ticker symbol"],
            freq: Annotated[
                str,
                "reporting frequency of the company's financial history: annual/quarterly",
            ],
            curr_date: Annotated[str, "current date you are trading at, yyyy-mm-dd"],
    ):
        data_balance_sheet = interface.get_simfin_balance_sheet(ticker, freq, curr_date)

        return data_balance_sheet

    @staticmethod
    @tool
    def get_simfin_cashflow(
            ticker: Annotated[str, "ticker symbol"],
            freq: Annotated[
                str,
                "reporting frequency of the company's financial history: annual/quarterly",
            ],
            curr_date: Annotated[str, "current date you are trading at, yyyy-mm-dd"],
    ):
        data_cashflow = interface.get_simfin_cashflow(ticker, freq, curr_date)

        return data_cashflow

    @staticmethod
    @tool
    def get_simfin_income_stmt(
            ticker: Annotated[str, "ticker symbol"],
            freq: Annotated[
                str,
                "reporting frequency of the company's financial history: annual/quarterly",
            ],
            curr_date: Annotated[str, "current date you are trading at, yyyy-mm-dd"],
    ):
        data_income_stmt = interface.get_simfin_income_statements(
            ticker, freq, curr_date
        )

        return data_income_stmt

    @staticmethod
    @tool
    def get_google_news(
            query: Annotated[str, "Query to search with"],
            curr_date: Annotated[str, "Curr date in yyyy-mm-dd format"],
    ):
        google_news_results = interface.get_google_news(query, curr_date, 7)

        return google_news_results

    @staticmethod
    @tool
    def get_stock_news_openai(
            ticker: Annotated[str, "the company's ticker"],
            curr_date: Annotated[str, "Current date in yyyy-mm-dd format"],
    ):
        openai_news_results = interface.get_stock_news_openai(ticker, curr_date)

        return openai_news_results

    @staticmethod
    @tool
    def get_global_news_openai(
            curr_date: Annotated[str, "Current date in yyyy-mm-dd format"],
    ):
        openai_news_results = interface.get_global_news_openai(curr_date)

        return openai_news_results

    @staticmethod
    @tool
    def get_fundamentals_openai(
            ticker: Annotated[str, "the company's ticker"],
            curr_date: Annotated[str, "Current date in yyyy-mm-dd format"],
    ):
        openai_fundamentals_results = interface.get_fundamentals_openai(
            ticker, curr_date
        )

        return openai_fundamentals_results
