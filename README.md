# Jetson-Notification-Service

## Architecture

With our publicly available Telegram bot @road_guards_bot, users can subscribe to it to receive alerts related to a specific vehicle.

The jetson module inside the car will make a call to our API in case of a crash, resulting in a message from the bot (containing the location of the accident as a Google Maps URL) being sent to all the subscribers.

![](./img/botInteraction.png)

## Bot Interaction (On User Interaction)

![](./img/archOnInteraction.png)

## Bot Interaction (On Crash)

![](./img/archOnCrash.png)

## Future Work

In future work, I will extend to provide two more solutions: Accident broadcasting, so that the vehicles involved in accidents should quickly broadcast an accident message to warn approaching vehicles to exercise caution, and Vehicle Intruder Alert Detection, to detect and alert about the existence of an unauthorized user inside of the user’s vehicle.
