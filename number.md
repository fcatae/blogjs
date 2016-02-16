Number é 

    0.1
    0.2
    0.1+0.2==0.3 //FALSE
    
    0.1+0.2 // 0.30000000000000004
    
    0.1+0.2-0.00000000000000004 // 0.3
    0.1+0.2-0.00000000000000004 == 0.3 // TRUE!
    
Floating point = números aproximados.

Maior número possivel INT.

32-bits.
ffff ffff

Inteiros sao 53 bits

safeIntegers:
Number.isSafeInteger(1234545612132123132132132132132789)

limites

Number.MAX_SAFE_INTEGER
9.007.199.254.740.991
10007199254740990

Truque:

num | 0

Double == number???

    00000032`f00a1559 81fa10270000    cmp     edx,2710h
    00000032`f00a155f 7d32            jge     00000032`f00a1593
    00000032`f00a1561 48833b00        cmp     qword ptr [rbx],0
    00000032`f00a1565 0f8402010000    je      00000032`f00a166d
    00000032`f00a156b 480f28d6        movaps  xmm2,xmm6
    00000032`f00a156f f2480f59d0      mulsd   xmm2,xmm0
    00000032`f00a1574 f2480f58d6      addsd   xmm2,xmm6
    00000032`f00a1579 480f28d9        movaps  xmm3,xmm1
    00000032`f00a157d f2480f58da      addsd   xmm3,xmm2
    00000032`f00a1582 66480f7edf      movd    rdi,xmm3
    00000032`f00a1587 4933fc          xor     rdi,r12
    00000032`f00a158a 48897cd018      mov     qword ptr [rax+rdx*8+18h],rdi
    00000032`f00a158f ffc2            inc     edx
    00000032`f00a1591 ebc6            jmp     00000032`f00a1559

mais complicado?

    00000032`f0081548 81fe10270000    cmp     esi,2710h
    00000032`f008154e 7d49            jge     00000032`f0081599
    00000032`f0081550 4883bf30feffff00 cmp     qword ptr [rdi-1D0h],0
    00000032`f0081558 0f840a010000    je      00000032`f0081668
    00000032`f008155e 48833f00        cmp     qword ptr [rdi],0
    00000032`f0081562 0f841c010000    je      00000032`f0081684
    00000032`f0081568 448bc8          mov     r9d,eax
    00000032`f008156b 4183c10a        add     r9d,0Ah
    00000032`f008156f 0f802b010000    jo      00000032`f00816a0
    00000032`f0081575 4533d2          xor     r10d,r10d
    00000032`f0081578 4c8955c8        mov     qword ptr [rbp-38h],r10
    00000032`f008157c 458bd0          mov     r10d,r8d
    00000032`f008157f 4503d1          add     r10d,r9d
    00000032`f0081582 0f8038010000    jo      00000032`f00816c0
    00000032`f0081588 458bca          mov     r9d,r10d
    00000032`f008158b 4d0fbae930      bts     r9,30h
    00000032`f0081590 4c894cf118      mov     qword ptr [rcx+rsi*8+18h],r9
    00000032`f0081595 ffc6            inc     esi
    00000032`f0081597 ebaf            jmp     00000032`f0081548
