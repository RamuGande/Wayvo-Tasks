def check(name):
    cache={}
    main = {'aditya':"500",
            "ramu":"1000",
            "venkat":"1500",
            "rakesh":"2000"}
    if name in cache.keys():
        print("resource released from cache",cache[name])

    elif name in main.keys():
        print("resource released from main",main[name])
        cache[name] = main[name]
while True:
    inp = input("enter name or (0 to exit)")
    if inp==0:
        print("you are done")
        break
    else:
        check(inp)


