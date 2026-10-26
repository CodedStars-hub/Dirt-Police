# Canonical formatting for ward names and municipal codes
class WardNormalizer:
    def normalize(self, name: str) -> str: return name.strip().title()
