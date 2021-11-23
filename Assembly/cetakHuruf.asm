.section text
.code
org 100h
proses:
mov ah,02h
mov dl,4Eh
int 21h
mov dl,41h
int 21h
mov dl,4Dh
int 21h
mov dl, 41h
int 21h
mov dl, 20h
int 21h
mov dl, 53h
int 21h
mov dl,41h
int 21h
mov dl,59h
int 21h
mov dl,41h
int 21h
int 20h
END proses
