# Computes vegetation and bare ground change index
def compute_ndvi(nir: float, red: float) -> float:
    denom = nir + red
    return (nir - red) / denom if denom != 0 else 0.0
