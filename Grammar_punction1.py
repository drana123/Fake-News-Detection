import language_check
import sys
tool = language_check.LanguageTool('en-US')
def error(text) :
    matches = tool.check(text)
    l_string=(len(text.split()))
    l_error=len(matches)
    ratio=l_error/(l_string*0.08)
    if ratio >=1:
        result=6
    else:
        result=15
    return result
def __main__():
    str1=sys.argv[1]
    result=error(str1)
    print(result)
    sys.stdout.flush()

if __name__ == "__main__" :
    __main__()
