import json
import random
import time
import tweepy
import sys
from os import environ

CONSUMER_KEY = environ['CONSUMER_KEY']
CONSUMER_SECRET = environ['CONSUMER_SECRET']
ACCESS_KEY = environ['ACCESS_KEY']
ACCESS_SECRET = environ['ACCESS_SECRET']


def get_quotes():
    with open('tweet.json') as f:
        quotes_json = json.load(f)
    return quotes_json['quotes']

def generate_quote():
    quotes = get_quotes()
    gen_quote = random.choice(quotes)
    return gen_quote

def create_tweet():
    quote = generate_quote()
    tweet = """
            {}
            ~{}
            """.format(quote['quote'], quote['author'])
    return tweet

def tweet_quote():
    interval = 60 * 60 * 12 
    #one tweet for every 12 hours

    auth = tweepy.OAuthHandler(CONSUMER_KEY,CONSUMER_SECRET)
    auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
    api = tweepy.API(auth)

    # tweet = create_tweet()
    # api.update_status(tweet)

    while True:
        print('getting a random quote...')        
        tweet = create_tweet()
        api.update_status(tweet)
        time.sleep(interval) 
   

if __name__ == "__main__":
    tweet_quote()
