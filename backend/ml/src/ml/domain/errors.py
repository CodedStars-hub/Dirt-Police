"""Exception hierarchy for the ml package. Every error raised here is a DirtPoliceError."""


class DirtPoliceError(Exception):
    """Root of every error the ml package raises on purpose."""


class ConfigError(DirtPoliceError):
    """Settings are missing or invalid."""


class ExternalServiceError(DirtPoliceError):
    """An outside service (AWS, a model provider or a third party) failed; adapters raise this."""


class ProviderError(ExternalServiceError):
    """One model provider call failed: throttled, unavailable, refused or timed out."""


class NoProviderAnsweredError(DirtPoliceError):
    """Every provider in a task's order was skipped, failed or gave an invalid answer."""


class NotBlurredImageError(DirtPoliceError):
    """An image did not come from the blurred `media/` area, so no model may see it."""


class InvalidImageError(DirtPoliceError):
    """Image bytes are empty or in a format the models do not accept."""


class InvalidClaimError(DirtPoliceError):
    """A report type and context that are not a pair in the contract, or an unknown purpose."""
