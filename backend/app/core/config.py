from typing import Dict, Optional

from app.core import default_config

_config: Optional[Dict] = None
DATA_DIR: Optional[str] = None


def initialize_config():
    global _config, DATA_DIR
    if _config is None:
        _config = default_config.DEFAULT_CONFIG.copy()
        DATA_DIR = _config["data_dir"]


def set_config(config: Dict):
    global _config, DATA_DIR
    if _config is None:
        _config = default_config.DEFAULT_CONFIG.copy()
    _config.update(config)
    DATA_DIR = _config["data_dir"]


def get_config() -> Dict:
    if _config is None:
        initialize_config()
    return _config.copy()


initialize_config()
