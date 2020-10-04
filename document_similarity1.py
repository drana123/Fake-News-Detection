import sys
from collections import Counter
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
def pre_process(*strs):
  pass
def get_cosine_sim(*strs):
    vectors = [t for t in get_vectors(*strs)]
    return cosine_similarity(vectors)
def get_vectors(*strs):
    text = [t for t in strs]
    vectorizer = TfidfVectorizer()
    vectorizer.fit(text)
    return vectorizer.transform(text).toarray()

def main():
    str1=sys.argv[1]
    str2=sys.argv[2]
    print(str1)
    print(str2)
#    str1=str1.lower().split()
#    str2=str2.lower().split()
    sim=get_cosine_sim(str1,str2)
    if sim[0][1]>0.4:
        result=17
    else :
        result=10
    print(result)
    sys.stdout.flush()

if __name__ == "__main__" :
    main()
