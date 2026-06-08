import json

data = """Gaveled Redesign	{"dateTime":"2025-01-02T00:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-03T00:00:00+05:30","timeZone":"Asia/Kolkata"}	default	0	Gmeet with Krishna Chaitanya								
ICITEE & IASF Conference	{"dateTime":"2025-01-08T00:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-11T00:00:00+05:30","timeZone":"Asia/Kolkata"}	default	0									
AICTE TechSaksham	{"dateTime":"2025-01-15T17:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-15T18:00:00+05:30","timeZone":"Asia/Kolkata"}	default	0	https://zoom.us/j/92726417286								
ML Paper Conference	{"dateTime":"2025-01-17T00:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-18T00:00:00+05:30","timeZone":"Asia/Kolkata"}	default	1									
Gaveled	{"dateTime":"2025-01-17T00:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-18T00:00:00+05:30","timeZone":"Asia/Kolkata"}	default	0	"Welcome to Gaveled !
Added to the Whatsapp Tech Group"								
Indian CP Community	{"dateTime":"2025-01-17T00:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-20T00:00:00+05:30","timeZone":"Asia/Kolkata"}	default	1	https://codeforces.com/group/OseQ3LxgeG								
TechSaksham	{"dateTime":"2025-01-17T17:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-17T19:00:00+05:30","timeZone":"Asia/Kolkata"}	default	0	https://zoom.us/j/93664622073								
TechSaksham Sessions	{"dateTime":"2025-01-20T00:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-21T00:00:00+05:30","timeZone":"Asia/Kolkata"}	default	1									
AI Hackathon Orientation	{"dateTime":"2025-01-21T19:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-21T20:00:00+05:30","timeZone":"Asia/Kolkata"}	default	0									
IBM TechXchange	{"dateTime":"2025-01-23T21:30:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-23T23:45:00+05:30","timeZone":"Asia/Kolkata"}	default	0									
TechSaksham Sessions	{"dateTime":"2025-01-24T00:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-25T00:00:00+05:30","timeZone":"Asia/Kolkata"}	default	1									
AI Hack Day VNR VJIET	{"dateTime":"2025-01-25T09:30:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-25T16:30:00+05:30","timeZone":"Asia/Kolkata"}	default	0									
TechSaksham Sessions	{"dateTime":"2025-01-27T17:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-27T19:00:00+05:30","timeZone":"Asia/Kolkata"}	default	3									
TechSaksham Sessions	{"dateTime":"2025-01-31T17:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-01-31T19:00:00+05:30","timeZone":"Asia/Kolkata"}	default	3									
Gen AI 101 Student Nexus	{"dateTime":"2025-02-01T18:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-02-01T20:00:00+05:30","timeZone":"Asia/Kolkata"}	default	0									
CF #1002	{"dateTime":"2025-02-02T20:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-02-02T21:00:00+05:30","timeZone":"Asia/Kolkata"}	default	1									
TechSaksham Sessions	{"dateTime":"2025-02-03T17:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-02-03T19:00:00+05:30","timeZone":"Asia/Kolkata"}	default	3									
Manthan Contest IIT BHU	{"dateTime":"2025-02-05T20:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-02-05T22:00:00+05:30","timeZone":"Asia/Kolkata"}	default	0	https://unstop.com/hackathons/manthan-codefest25-indian-institute-of-technology-iit-bhu-varanasi-1363484								
TechSaksham Sessions	{"dateTime":"2025-02-07T17:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-02-07T19:00:00+05:30","timeZone":"Asia/Kolkata"}	default	3									
TechSaksham Sessions	{"dateTime":"2025-02-10T17:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-02-10T19:00:00+05:30","timeZone":"Asia/Kolkata"}	default	3									
TechSaksham Sessions	{"dateTime":"2025-02-14T17:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-02-14T19:00:00+05:30","timeZone":"Asia/Kolkata"}	default	3									
Mastering the GitHub Student Developer Pack	{"dateTime":"2025-02-15T19:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-02-15T20:00:00+05:30","timeZone":"Asia/Kolkata"}	default	0	<a href="https://events.teams.microsoft.com/event/60833f1a-a139-4579-a762-1cc534856fa8@84c31ca0-ac3b-4eae-ad11-519d80233e6f">https://events.teams.microsoft.com/event/60833f1a-a139-4579-a762-1cc534856fa8@84c31ca0-ac3b-4eae-ad11-519d80233e6f</a><br><br><p>🚀 <strong>Join Us for an Exclusive Webinar on the GitHub Student Developer Pack!</strong> 🎓</p><p>Organized by <strong>Student Nexus</strong> in collaboration with <strong>Microsoft Learn Student Ambassadors</strong>, this webinar is your gateway to unlocking <strong>free industry-standard tools</strong> to enhance your coding skills and build impactful projects.</p><h3>&nbsp;</h3><h3>🌟 <strong>What’s in it for you?</strong></h3><p>✅ <strong>Access to the GitHub Student Developer Pack</strong><br>✅ <strong>Participation Certificate for all attendees</strong><br>✅ <strong>Special Perk:</strong> Active participants stand a chance to <strong>win 3-month Xbox Game Pass Ultimate!</strong></p><h3>&nbsp;</h3><h3>📌 <strong>What You’ll Learn:</strong></h3><p>🔹 How to sign up for and maximize the <strong>GitHub Student Developer Pack</strong><br>🔹 Key tools like <strong>GitHub Pro, cloud platforms, and design software</strong><br>🔹 Practical tips to boost your <strong>academic and personal projects</strong><br>🔹 Inspiring real-world examples of developers benefiting from the Pack</p><p>Don’t miss this opportunity to <strong>level up your development journey</strong> with GitHub</p>	Hosted virtually on Microsoft Virtual Events (link in the description)							
Build and Deploy AI Agents	{"dateTime":"2025-02-17T19:00:00+05:30","timeZone":"Asia/Kolkata"}	{"dateTime":"2025-02-17T20:00:00+05:30","timeZone":"Asia/Kolkata"}	default	0	"Get up-to-date information at: https://lu.ma/9qkayfg4?pk=g-8EPrbBpaHLoT2S0

AI That Works for You, Built by You! 🚀
We are excited to bring an exclusive AI Session in collaboration with Lyzr AI, specially designed for the Harshith Presents community! 🎉
What’s in it for you?

✅ Learn what AI agents are and why they matter!
✅ Build your own AI-powered agent from scratch!
✅ Discover how students are using AI to automate, earn, and stand out!
But that’s not all! This two-week AI cohort will feature:
⚡ One session per week
🏆 Best AI agents will get a chance to work with Lyzr AI Team on a real-world project!
📜 Certificate of completion to enhance your resume
📅 Date:…

Hosted by Meghanath Reddy M C & Harshith Sai"	https://lu.ma/join/g-8EPrbBpaHLoT2S0							
Build and Deploy AI Agents	{"dateTime":"2025-02-18T18:30:00+05:30","timeZone":"UTC"}	{"dateTime":"2025-02-18T19:30:00+05:30","timeZone":"UTC"}	default	161972416	"Get up-to-date information at: https://lu.ma/e/evt-qH18gGz6HTSGXSS?pk=g-8EPrbBpaHLoT2S0

AI That Works for You, Built by You! 🚀
We are excited to bring an exclusive AI Session in collaboration with Lyzr AI, specially designed for the Harshith Presents community! 🎉
What’s in it for you?

✅ Learn what AI agents are and why they matter!
✅ Build your own AI-powered agent from scratch!
✅ Discover how students are using AI to automate, earn, and stand out!
But that’s not all! This two-week AI cohort will feature:
⚡ One session per week
🏆 Best AI agents will get a chance to work with Lyzr AI Team on a real-world project!
📜 Certificate of completion to enhance your resume
📅 Date:…

Hosted by Meghanath Reddy M C & Harshith Sai"	https://lu.ma/join/g-8EPrbBpaHLoT2S0							"""

events = []
# Use csv module to handle newlines within quoted fields
import io
import csv

f = io.StringIO(data.strip())
reader = csv.reader(f, delimiter='\t')

for parts in reader:
    # Filter empty parts if any list items are empty strings? 
    # The csv reader returns empty strings for consecutive delimiters.
    # The original logic filtered `if p.strip()`.
    # But with tab delimiter, empty strings between tabs are valid empty fields?
    # User data: TAB default TAB 0 TAB "Desc..." TAB url
    # So index 3 is default, index 4 is 0.
    # Let's clean the parts list: remove empty strings if they are just artifact of split?
    # Actually, csv reader handles consecutive delimiters correctly as empty strings.
    # The original data has tabs.
    # Let's just use parts by index.
    
    # Remove empty strings from end if any?
    # The original logic `parts = [p for p in parts if p.strip()]` removed ALL empty fields.
    # This shifts indices!
    # e.g. `Title \t Start \t End \t \t 0` -> `Title, Start, End, 0`
    # We should probably stick to that logic if the input is messy.
    # But csv reader preserves empty fields.
    # Let's replicate the filtering:
    parts = [p for p in parts if p.strip()]

    if len(parts) >= 3:
        title = parts[0].strip()
        try:
            start = json.loads(parts[1])
            end = json.loads(parts[2])
            
            description = ""
            location = ""
            
            if len(parts) > 5:
                 val = parts[5].strip()
                 # Quotes are already handled by csv.reader!
                 # So val should be the content inside quotes.
                 
                 # If it looks like a URL, likely location/link
                 if val.startswith("http"):
                     location = val
                 else:
                     description = val
            
            if len(parts) > 6:
                val = parts[6].strip()
                 # If we haven't set location yet and this looks like one
                if not location and (val.startswith("http") or "Block" in val or "Hall" in val):
                     location = val
                elif not description:
                     description = val
                else:
                    # Append if both exist?
                    description += "\n" + val

            events.append({
                "title": title,
                "start": start,
                "end": end,
                "eventType": "default",
                "description": description,
                "location": location
            })
        except json.JSONDecodeError as e:
            print(f"Error parsing line: {parts} ... {e}")
        except Exception as e:
            print(f"Error processing line: {parts} ... {e}")


output_content = "export const NEW_EVENTS: CalendarEvent[] = " + json.dumps(events, indent=4) + ";"
with open("new_events.ts", "w") as f:
    f.write(output_content)
print("File written to new_events.ts")

