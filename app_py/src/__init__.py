from flask import (Flask, session, request, redirect, url_for, g)

# Create app object
app = Flask(__name__)

# Configure app
import os
mode='debug'
# Views init
from src import main


print('App running in {0} mode.'.format(mode))
