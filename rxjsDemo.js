var rxjsDemo = function () {
    var subject$ = new rxjs.Subject();
    var subjectObservable$ = subject$.asObservable();

    var behaviorSubject$ = new rxjs.BehaviorSubject(0);
    var behaviorSubjectObservable$ = behaviorSubject$.asObservable();

    var replaySubject$ = new rxjs.ReplaySubject();
    var replaySubjectObservable$ = replaySubject$.asObservable();

    var asyncSubject$ = new rxjs.AsyncSubject();
    var asyncSubjectObservable$ = asyncSubject$.asObservable();

    function runCounter() {
        var currentValue = 0;

        var interval = setInterval(() => {
            currentValue++;

            subject$.next(currentValue);
            behaviorSubject$.next(currentValue);
            replaySubject$.next(currentValue);
            asyncSubject$.next(currentValue);

            if (currentValue >= 10) {
                asyncSubject$.complete();
                clearInterval(interval);
            }
        }, 10)
    }

    return {
        subjectObservable$: subjectObservable$,
        behaviorSubjectObservable$: behaviorSubjectObservable$,
        replaySubjectObservable$: replaySubjectObservable$,
        asyncSubjectObservable$: asyncSubjectObservable$,
        start: runCounter
    }
}();

console.log(rxjsDemo);