import requests
from bs4 import BeautifulSoup
import csv

def scrape_style_color_993300_with_dr():
    # URL of the SDSU Electrical Engineering faculty page
    url = "https://electrical.sdsu.edu/people/faculty"

    # Send a GET request to the URL
    response = requests.get(url)

    # Parse HTML content
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all elements with the style attribute containing "color: #993300;"
    elements_with_color_993300 = soup.find_all(style="color: #993300;")

    # List to store the text content of matching elements with "Dr."
    matching_texts = []

    # Iterate through each matching element
    for element in elements_with_color_993300:
        text = element.get_text(strip=True)
        # Check if the text contains "Dr."
        if "Dr." in text:
            matching_texts.append(text)

    return matching_texts

def write_to_csv(data, filename):
    with open(filename, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(['Name'])  # Header
        for item in data:
            writer.writerow([item])

if __name__ == "__main__":
    color_993300_with_dr_elements = scrape_style_color_993300_with_dr()

    # Write the scraped data to a CSV file
    write_to_csv(color_993300_with_dr_elements, 'faculty_with_dr.csv')
