import geocoder

def constructGoogleMapsUrl () :
    g = geocoder.ip('me')
    url = f"https://www.google.com/maps?q={g.lat},{g.lng}"
    return url

def sendTelegramNotification(reportContent) :
    msg = {
        "msg": reportContent,
    }
    import requests

    url = 'https://car-notification-jetson.vercel.app/api/reports'

    requests.post(url, json = msg)
    

sendTelegramNotification("Reported Location:")
sendTelegramNotification(constructGoogleMapsUrl())