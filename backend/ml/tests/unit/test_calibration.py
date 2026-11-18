from ml.services.calibration_curve import calibrate_prob


def test_calibration():
    assert 0.0 <= calibrate_prob(0.5) <= 1.0
