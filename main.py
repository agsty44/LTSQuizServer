# Radio Code 0 refers to "Jerningham": We will display a J
# 
# Radio Code 1 refers to "Hume": We will display a H
# 
# Radio Code 2 refers to "Stobo": We will display a S

def on_received_number(receivedNumber):
    list2: List[str] = []
    if receivedNumber == 0:
        list2.append("J")
    elif receivedNumber == 0:
        list2.append("J")
    else:
        if receivedNumber == 0:
            list2.append("J")
radio.on_received_number(on_received_number)

radio.set_group(1)

def on_forever():
    pass
basic.forever(on_forever)
