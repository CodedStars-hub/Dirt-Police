# Sigmoid temperature scaling for model confidence calibration
import math
def calibrate_prob(raw_prob: float, temp: float = 1.15) -> float:
    logit = math.log(max(raw_prob, 1e-6) / max(1.0 - raw_prob, 1e-6))
    return 1.0 / (1.0 + math.exp(-logit / temp))
