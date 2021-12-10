def solution(p):
    def dfs(p):
        if not len(p): return p

        if p[0] == '(':
            isValid = True
        else:
            isValid = False

        u = []
        v = []
        cnt = 0
        start = 0
        end = 0
        flag = False
        for i in range(len(p)):
            if p[i] == '(':
                if (cnt == -1):
                    end = i
                    break
                cnt += 1
            else:
                cnt -= 1
                if (cnt == -1):
                    start = i
                    flag = True

        if isValid:
            u = p[:start]
            v = p[start:]
        else:
            u = p[start:end+1]
            v = p[end+1:]
        # print(flag, isValid)
        if not isValid:
            u.pop()
            u.pop(0)
            for i in range(len(u)):
                if u[i] == '(':
                    u[i] = ')'
                else:
                    u[i] = '('
            return ['('] + dfs(v) + [')'] + u
        elif flag:
            return dfs(u) + dfs(v)
        else:
            return p

    return ''.join(dfs(list(p)))

print(solution("(()())()"))
print(solution(")("))
print(solution("()))((()"))
print(solution(")((())"))
print(solution(")()("))