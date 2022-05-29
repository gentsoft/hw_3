//задание 1

let numbersA,
    numbersB;

numbersA = 1;
numbersB = 35;

while (numbersA <= 50)
    {
    console.log (numbersA);
    numbersA ++;
    }

while (numbersB >= 8)
    {
    console.log (numbersB);
    numbersB --;
    }

//задание 2

numbersB = 89;

while (numbersB >= 11)
    {
    document.write (numbersB, '<br/>');
    numbersB --;
    }

//задание 3

numbersA = 0;
numbersB = 0;

while (numbersA < 100)
    {
    numbersA ++;
    numbersB += numbersA;
    }

    console.log (numbersB);

//задание 4

numbersA = 0;
numbersB = 0;

while (numbersA < 5)
    {
    numbersA ++;
    numbersB += numbersA;
    console.log (numbersA, 'сумма числа: ', numbersB);
    }

//задание 5

numbersA = 8;

while (numbersA <= 56)
    {
    if ((numbersA % 2) == 0) 
        {
        console.log ('четные числа while:',numbersA);
        }
    numbersA ++;
    }

numbersA = 8;

for (;numbersA <= 56;)
    {
    if ((numbersA % 2) == 0) 
        {
        console.log ('четные числа for:',numbersA);
        }
    numbersA ++;
    }

//задание 6

numbersA = 2;
numbersB = 1;

while (numbersA <= 10)
    {
    while (numbersB <= 10)
        {
        document.write (numbersA,'*',numbersB,'=',numbersA * numbersB, '<br/>');
        numbersB ++;
        }
    numbersA ++;
    numbersB = 1;
    document.write ('<br/>');
    }

//задание 7

let n,
    num;

n = 1000;
num = 0;

while (n > 50)
    {
    n = n / 2;
    num ++;
    }

console.log ('остаток:',n);
console.log ('итераций:',num);

//задание 8

let numbersC;

numbersB = true;
numbersC = 0;
num = 0;
/*
while (numbersB == true)
    {
    numbersA = undefined;
    numbersA = prompt ('введите число')

        if (numbersA != 0 && (Number (numbersA)) == numbersA && numbersA != undefined)
            {
            numbersC = numbersC + Number (numbersA);
            num ++;
            }
            else if (numbersA == 0 || numbersA == undefined)
                    {
                    document.write ('сумма всех чисел: ',numbersC, '<br/>');
                    document.write ('среднее арифметическое: ',numbersC / num, '<br/>');
                    numbersB = false;
                    }
                    else
                        {
                        document.write ('ошибка ввода<br/>');
                        numbersB = false;
                        }
    }*/

//задание 9  не успеваю

let str,
    strNum,
    numbersMin,
    numbersMax;

str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
strNum = 0;
numbersA = 0;

console.log ('строка: ',str);

while (numbersA == undefined)
    {
    if (str[strNum] != ' ', str[strNum] != undefined)
        {
        numbersA = str[strNum];
        if (numbersMin > numbersA)
            {
            numbersMin = numbersA;
            }
            else if (numbersMax < numbersA)
                {
                numbersMax = numbersA;
                }
                else
                    {
                    numbersA = undefined;
                    }
        }
    }

console.log ('минимальное число: ',numbersMin);
console.log ('масимальное число: ',numbersMax);