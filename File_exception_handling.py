try:
    # Try opening the file
    file = open("The day I met Happy.txt", "r")
    data = file.read()
    print("📖 Original File Content:")
    print(data)

    # Modify the content (make it uppercase)
    modified_data = data.upper()

    # Write the modified content into a new file
    new_file = open("Modified_Happy.txt", "w")
    new_file.write(modified_data)
    new_file.close()

    print("\n✅ Modified content has been saved to 'Modified_Happy.txt'")

except FileNotFoundError:
    print("❌ Error: File 'The day I met Happy.txt' not found.")

finally:
    # Make sure file is closed if it was opened successfully
    try:
        file.close()
    except NameError:
        # file was never opened (because it didn't exist)
        pass
