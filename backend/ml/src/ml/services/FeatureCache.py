# In-memory LRU cache for visual embeddings across video frames
class VisualFeatureCache:
    def __init__(self, capacity: int = 128):
        self.capacity = capacity
