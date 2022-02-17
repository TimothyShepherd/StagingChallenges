from os import strerror
import string

def Atbash(user_input):
    codex = str.maketrans(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba")
    encryption = str.translate(user_input, codex)
    return encryption;

print("Please enter message:", end=" ")
print(Atbash(input()))