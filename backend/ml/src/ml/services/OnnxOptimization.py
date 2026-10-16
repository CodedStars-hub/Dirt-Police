# Contiguous memory layout check before tensor inference
import numpy as np
def ensure_contiguous(tensor: np.ndarray) -> np.ndarray:
    return np.ascontiguousarray(tensor)
