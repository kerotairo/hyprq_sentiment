# -*- coding: utf-8 -*-
"""
Created on Mon Sep  4 23:11:22 2017

@author: Kevin Rotairo
"""

import pandas as pd
import numpy as np


def FilTranslate(posts):
    try:
        translated = translator.translate(str(posts),src='tl')
        print(translated.text)
    except Exception:
        print(Exception.args)
        return "This had errors"
        pass
        #translated = translator.translate("")
    return translated.text


posts= pd.read_csv("AllPosts_Cleaned.csv", encoding = 'utf8')
posts.head()
posts["Label"] = None

from googletrans import Translator
translator = Translator()

posts["Translated"]= posts.iloc[:,1].apply(FilTranslate)
posts.to_csv("WithTranslation.csv", sep=",", encoding = 'utf-8', index=False)