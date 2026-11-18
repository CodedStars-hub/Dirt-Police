from ml.services.satellite_spectral_index import compute_ndvi


def test_ndvi():
    assert -1.0 <= compute_ndvi(0.8, 0.4) <= 1.0
