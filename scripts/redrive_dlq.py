# Redrives failed intake messages back to main processing queue
import sys
def redrive_messages(dry_run=True):
    print(f"Redrive dry_run={dry_run}")
if __name__ == "__main__": redrive_messages()
